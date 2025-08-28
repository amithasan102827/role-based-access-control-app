import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users: [
        { id: 1, name: "Ava Merchant", role: "merchant", status: "active" },
        { id: 2, name: "Ben Member", role: "member", status: "active" },
    ],
    merchants: [
        { id: 101, store: "GadgetHub", owner: "Ava Merchant", status: "verified" },
    ],
    purchases: [
        { id: 401, customer: "Ben Member", amount: 120, approved: false },
    ],
    notifications: [],
    customers: [
        { id: 9001, name: "Ben Member", phone: "011111111" },
        { id: 9002, name: "Cara Member", phone: "022222222" },
    ],
    member: {
        points: 1250,
        recent: [{ id: 1, label: "Earned from GadgetHub", points: 200 }],
    },
    contributionRate: 5,
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        toggleUserStatus: (state, action) => {
            const user = state.users.find((u) => u.id === action.payload);
            if (user) user.status = user.status === "active" ? "suspended" : "active";
        },
        verifyMerchant: (state, action) => {
            const m = state.merchants.find((x) => x.id === action.payload);
            if (m) m.status = m.status === "verified" ? "pending" : "verified";
        },
        approvePurchase: (state, action) => {
            const p = state.purchases.find((x) => x.id === action.payload);
            if (p) {
                p.approved = true;
                state.notifications.unshift({ id: nanoid(), text: `Purchase #${p.id} approved` });
            }
        },
        setContributionRate: (state, action) => {
            state.contributionRate = Number(action.payload);
        },
        addNotification: (state, action) => {
            state.notifications.unshift({ id: nanoid(), ...action.payload });
        },
    },
});

export const { toggleUserStatus, verifyMerchant, approvePurchase, setContributionRate, addNotification } = dataSlice.actions;
export default dataSlice.reducer;
