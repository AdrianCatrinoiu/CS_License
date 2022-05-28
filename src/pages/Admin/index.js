import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormVerify from "../../components/FormVerify";
import WithAdminAuth from "../../hoc/withAdminAuth";
import AdminLayout from "../../layouts/AdminLayout";
import { adminGetAllFormsStart } from "../../redux/User/user.actions";
const mapState = ({ user }) => ({
  formsList: user.formsList,
});

const Admin = (props) => {
  const dispatch = useDispatch();
  const { formsList } = useSelector(mapState);

  useEffect(() => {
    dispatch(adminGetAllFormsStart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WithAdminAuth>
      <AdminLayout>
        <div className="flex flex-col justify-between items-center">
          {formsList &&
            formsList.map((form) => (
              <div key={form.formData.id} className="my-8 w-[80%]">
                <FormVerify form={form} />
              </div>
            ))}
        </div>
      </AdminLayout>
    </WithAdminAuth>
  );
};

export default Admin;
