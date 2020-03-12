import Layout from "components/layout/Layout"
import React from "react"

interface Props {
    data: any
}

const ProfilePage: React.FC<Props> = ({ data }) => {
    return (
        <Layout>
            <span>Ya Man</span>
        </Layout>
    )
}

export default ProfilePage
