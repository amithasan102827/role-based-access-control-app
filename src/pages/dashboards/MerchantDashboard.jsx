import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Table from "../../components/Table";
import { useSelector, useDispatch } from "react-redux";
import { approvePurchase, setContributionRate } from "../../features/data/dataSlice";
import { useState } from "react";

export default function MerchantDashboard() {
    const dispatch = useDispatch();
    const { purchases, notifications, contributionRate, customers } = useSelector((state) => state.data);

    const [rate, setRate] = useState(contributionRate);
    const [search, setSearch] = useState("");

    const handleRateUpdate = () => dispatch(setContributionRate(Number(rate)));
    const filteredCustomers = customers.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <Layout>
            <h2 className="text-2xl font-bold mb-6">Merchant Dashboard</h2>

            <Card title="Approve Purchases">
                <Table
                    columns={["ID", "Customer", "Amount", "Approved"]}
                    data={purchases.map(p => ({ id: p.id, customer: p.customer, amount: p.amount, approved: p.approved }))}
                    approveCallback={(id) => dispatch(approvePurchase(id))}
                />
            </Card>

            <Card title="Lookup Customer">
                <input
                    type="text"
                    placeholder="Search customer"
                    className="border w-full p-2 mb-2 rounded"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <ul className="list-disc pl-6">
                    {filteredCustomers.map(c => (
                        <li key={c.id}>{c.name} ({c.phone})</li>
                    ))}
                </ul>
            </Card>

            <Card title="Set Contribution Rate">
                <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="border w-full p-2 mb-2 rounded"
                />
                <button
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={handleRateUpdate}
                >
                    Update Rate
                </button>
            </Card>

            <Card title="Notifications">
                <ul className="list-disc pl-6">
                    {notifications.map((n) => (
                        <li key={n.id}>{n.text}</li>
                    ))}
                </ul>
            </Card>
        </Layout>
    );
}
