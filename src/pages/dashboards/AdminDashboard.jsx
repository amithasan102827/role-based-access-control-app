import Layout from "../../components/Layout";
import Table from "../../components/Table";
import { useSelector, useDispatch } from "react-redux";
import { toggleUserStatus, verifyMerchant } from "../../features/data/dataSlice";

export default function AdminDashboard() {
    const dispatch = useDispatch();
    const { users, merchants } = useSelector((state) => state.data);

    return (
        <Layout>
            <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

            <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Users</h3>
                <Table
                    columns={["ID", "Name", "Role", "Status"]}
                    data={users.map(u => ({
                        id: u.id,
                        name: u.name,
                        role: u.role,
                        status: u.status,
                        action: () => dispatch(toggleUserStatus(u.id))
                    }))}
                    approveCallback={(id) => dispatch(toggleUserStatus(id))}
                />
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2">Merchants</h3>
                <Table
                    columns={["ID", "Store", "Owner", "Status"]}
                    data={merchants.map(m => ({
                        id: m.id,
                        store: m.store,
                        owner: m.owner,
                        status: m.status,
                        action: () => dispatch(verifyMerchant(m.id))
                    }))}
                    approveCallback={(id) => dispatch(verifyMerchant(id))}
                />
            </div>
        </Layout>
    );
}
