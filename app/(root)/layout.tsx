import Sidebar from "@/components/shared/Sidebar";
import MobileNav from "@/components/shared/MobileNav";

const Root = ({children}: {children: React.ReactNode}) => {
	//React.ReactNode is a type that represents any node that can be rendered in React
	return (
		<main className="root">
			<Sidebar />
			<MobileNav />

			<div className="root-container">
				<div className="wrapper">{children}</div>
			</div>
		</main>
	);
};

export default Root;
