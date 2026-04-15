import Head from "next/head";
import Beneficios from "../components/app/Beneficios";
import MainScreen from "../components/app/MainScreen";
import Navbar from "../components/app/Navbar";
import FAQ from "../components/app/FAQ";
import Grid from "@/components/app/Grid";

export default function Home() {
  return (
    <>
      <Head>
        <title>iSync | App móvil y web integrada con SAP Business One</title>
        <meta name="description" content="iSync es una solución móvil y web integrada directamente con SAP Business One que optimiza ventas, cotizaciones y cobros. Reduce errores, acelera procesos y sincroniza datos en tiempo real. Disponible para Honduras y América Central." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#1976d2" />
        <meta name="keywords" content="ERP, Honduras, iSync, facturación, pedidos, cobros, ventas, móvil, impresión térmica, dashboard" />
        <meta name="author" content="iSync" />
        <link rel="canonical" href="https://isynchn.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://isyncerp.com/" />
        <meta property="og:title" content="iSync" />
        <meta property="og:description" content="Optimiza tu negocio en Honduras con iSync, App móvil para SAP Business One: pedidos, cobros, facturación en PDF, impresión térmica y dashboard de ventas desde tu celular." />
        <meta property="og:image" content="https://isyncerp.com/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://isyncerp.com/" />
        <meta name="twitter:title" content="iSync" />
        <meta name="twitter:description" content="Optimiza tu negocio en Honduras con iSync, App móvil para SAP Business One: pedidos, cobros, facturación en PDF, impresión térmica y dashboard de ventas desde tu celular." />
        <meta name="twitter:image" content="https://isyncerp.com/og-image.png" />
      </Head>

      <Navbar />
      <MainScreen />
      <Beneficios />
      <Grid />
      <FAQ />
    </>
  );
}