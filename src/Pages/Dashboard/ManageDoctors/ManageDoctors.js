import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import DeleteConfirmModal from '../DeleteConfirmModal/DeleteConfirmModal';
import DoctorRow from '../DoctorRow/DoctorRow';

const ManageDoctors = () => {

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    const [deletingDoctor, setDeletingDoctor] = useState(null);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl">Manage Doctors {doctors.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                doctor={doctor}
                                key={doctor._id}
                                index={index}
                                setDeletingDoctor={setDeletingDoctor}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingDoctor && <DeleteConfirmModal
                deletingDoctor={deletingDoctor}
                refetch={refetch}
                setDeletingDoctor={setDeletingDoctor}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageDoctors;