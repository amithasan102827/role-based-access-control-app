export default function Table({ columns, data, approveCallback }) {
    return (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead className="bg-gray-100">
                <tr>
                    {columns.map((col, idx) => (
                        <th key={idx} className="text-left p-2 border-b">{col}</th>
                    ))}
                    {approveCallback && <th className="p-2 border-b">Actions</th>}
                </tr>
            </thead>
            <tbody>
                {data.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                        {columns.map((col, j) => (
                            <td key={j} className="p-2 border-b">{row[col.toLowerCase()] ?? row[j]}</td>
                        ))}
                        {approveCallback && (
                            <td className="p-2 border-b">
                                {!row.approved ? (
                                    <button
                                        className="px-2 py-1 bg-green-500 text-white rounded"
                                        onClick={() => approveCallback(row.id)}
                                    >
                                        Approve
                                    </button>
                                ) : (
                                    <span className="text-green-600 font-semibold">Approved</span>
                                )}
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
