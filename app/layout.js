import "./globals.css"
import Navbar from "../components/Navbar"

export const metadata = {
title: "Wiper Patriotic Front",
description: "Official digital platform"
}

export default function RootLayout({ children }) {
return (
<html lang="en">
<body>

<Navbar/>

{children}

</body>
</html>
)
}
