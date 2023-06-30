import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { GroupWrapper, TitleWrapper, Wrapper } from 'views/Dashboard.styles';
import { Title } from 'components/atoms/Title/Title';
import useModal from 'components/organisms/Modal/useModal';
import StudentDetails from 'components/moleculs/StudentDetails/StudentDetails';
import Modal from 'components/organisms/Modal/Modal';
import { useGetGroupsQuery } from 'store';
import { useError } from 'hooks/useError';
import { useGetStudentByIdMutation } from 'store';

const Dashboard = () => {
  const [currentStudent, setCurrentStudent] = useState([]);
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { data, isLoading } = useGetGroupsQuery();
  const { dispatchError } = useError();
  const [getStudentById] = useGetStudentByIdMutation();

  const handleOpenStudentsDetails = async (id) => {
    const { data } = await getStudentById(id);
    setCurrentStudent(data.students);
    handleOpenModal();
  };

  useEffect(() => {
    if (data && data.groups.length === 0) dispatchError('There are no groups');
  }, [data, dispatchError]);

  if (isLoading) {
    return (
      <Wrapper>
        <Title>Loading...</Title>
      </Wrapper>
    );
  }

  if (!id && data.groups.length > 0) return <Navigate to={`/group/${data.groups[0].id}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {data.groups.map(({ id }) => (
            <Link key={id} to={`/group/${id}`}>
              {id}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList handleOpenStudentsDetails={handleOpenStudentsDetails} />
        <Modal isOpen={isOpen} handleClose={handleCloseModal}>
          <StudentDetails student={currentStudent} />
        </Modal>
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
