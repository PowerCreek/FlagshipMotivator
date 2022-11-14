import { SessionProvider } from "next-auth/react"
import Layout from "../components/layout"
import { GetRoutes } from "../drivers/PageRoutes"

import { GamePage } from "../components/Content/GameLinks"

export default function IndexPage() {
  const route = GetRoutes()

  return (
      <Layout>
        <GamePage></GamePage>
      </Layout>
  )
}
