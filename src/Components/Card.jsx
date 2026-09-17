import Card from "./Card";

function UserCard({ user }) {
    return (
        <Card>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </Card>
    );
}

export default UserCard;