import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Project from "../components/project"

export default function Home() {
  return (
    <Layout>
        <Container>
            <Project
                projectname="Warehouse Management System"
                projectimage="https://www.vtechbarcode.com.my/wp-content/uploads/2020/02/how-warehouse-managements-system-improves-business-performance-1-1.png"
                description="Ad Hoc Tool"
                excerpt="A Warehouse Management System tool used to automate the creation of custom work orders for warehousing staff, as well as reports on the current state of the warehouse and product lines in it."
            />
            <Project
                projectname="Health Monitor Application"
                projectimage="https://i.imgur.com/ZEv4ndu.png"
                description="Ad Hoc Tool"
                excerpt="A health monitor, designed to show stats and figures about patients in real time to a health practitioner"
            />
        </Container>
    </Layout>
  )
}
