import { ServiceFactory } from "@/services/factory/serviceFactory";

export default async function UserList() {
  const userService = ServiceFactory.getUserService();
  const users = await userService.getUsers(); // มี delay อยู่แล้ว

  return (
    <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">User List</h1>
        <ul className="mt-4 space-y-2">
        {users.map((u) => (
            <li key={u.id}>
            <strong>{u.name}</strong> - {u.email}
            </li>
        ))}
        </ul>
    </div>
  );
}