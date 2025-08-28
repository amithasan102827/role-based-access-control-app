import Layout from "../../components/Layout";
import Card from "../../components/Card";
import { useSelector } from "react-redux";

export default function MemberDashboard() {
    const { member } = useSelector((state) => state.data);

    return (
        <Layout>
            <h2 className="text-2xl font-bold mb-6">Member Dashboard</h2>

            <Card title="Points Summary">
                <p className="mb-2">Total Points: {member.points}</p>
                <ul className="list-disc pl-6">
                    {member.recent.map(r => (
                        <li key={r.id}>{r.label} (+{r.points})</li>
                    ))}
                </ul>
            </Card>
        </Layout>
    );
}
