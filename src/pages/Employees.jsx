import Table from "../components/table/Table";
import {HOME} from "../Routes";
import {Link} from "react-router-dom";

const Employees = () => {
    return (
        <main className={"container mx-auto"}>
            <Table/>
            <Link to={HOME}>
                <span className={"logo homeLink"}>Home</span>
            </Link>
        </main>
    )
}
export default Employees