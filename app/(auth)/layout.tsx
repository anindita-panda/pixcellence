import React from "react";

const Layout = ({children}: {children: React.ReactNode}) => {
	//React.ReactNode is a type that represents any node that can be rendered in React
	return <main className="auth">{children}</main>;
};

export default Layout;
