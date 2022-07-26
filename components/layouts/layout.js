import  Head  from "next/head"

 export const Layout = ( { children }) => {
  return (
    <>
        <Head>
            <title>Pokemon App</title>
            <meta name ='Idaira'/>
            <meta name = 'descripción' content="Información sobre el pokemon XXXX"/>
            <meta name = 'keywords' content=" XXXX"/>
        </Head>

        <main>
            {children}
        </main>
    
    </>
  )
}


