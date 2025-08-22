import UserList from "./UserList";
import AppSuspense from "@crema/components/AppSuspense";

const Page = () => {
    return (
        <div>
            <h1>Protected Home Page ประชาชน test</h1>
            <p>โดยที่ประชาชนแห่งสหประชาชาติได้ยืนยันอีกครั้งไว้ในกฎบัตรถึงศรัทธาในสิทธิมนุษยชนขั้นพื้นฐาน</p>
            
            {/* <div className="p-4">
                <h1 className="text-xl font-bold">รายชื่อผู้ใช้</h1>
                <ul className="mt-4 space-y-2">
                    {users.map((user) => (
                    <li key={user.id} className="border p-2 rounded">
                        <strong>{user.name}</strong> <br />
                        <span className="text-sm text-gray-600">{user.email}</span>
                    </li>
                    ))}
                </ul>
            </div> */}

            <AppSuspense>
                <UserList />
            </AppSuspense>
        </div>
    );
};

export default Page;