import {deleteEmployee} from "@/lib/action";

export const DeleteButton = ({id}: { id: string }) => {
    const DeleteEmployeetWithId = deleteEmployee.bind(null, id);
    return (
        <form action={DeleteEmployeetWithId}>
            <button className="btn btn-error">
                Delete
            </button>
        </form>
    );
};
