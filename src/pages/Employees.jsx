import Table from "../components/table/Table";
import {HOME} from "../Routes";
import {Link} from "react-router-dom";

const Employees = () => {
    return (
        <main className={"container mx-auto"}>
            {/*<h2 className={"text-center my-4 text-xl text-violet-700"}>Employee list</h2>*/}
            <Table/>
            <Link to={HOME}>
                <span className={"logo homeLink"}>Home</span>
            </Link>
        </main>
    )
}
export default Employees