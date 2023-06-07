import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ChatGPT Code Interpreter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to ChatGPT Code Interpreter!" />
        <p className="description">
          ChatGPT Code Interpreter is a new tool developed by OpenAI that allows ChatGPT to understand and interact with various programming languages. The plugin is still in its alpha phase, but it has already shown a lot of potential for developers, scientists, and engineers. 
        </p>

        <h2 className="subtitle">Features of ChatGPT Code Interpreter</h2>
        <ul>
          <li>Solving mathematical problems</li>
          <li>Performing data analysis and visualization</li>
          <li>Converting files between formats</li>
          <li>Visualizing data and creating GIFs</li>
          <li>Cleaning data and generating insights</li>
          <li>Converting files to different formats quickly</li>
        </ul>

        <h2 className="subtitle">Availability and Pricing</h2>
        <p className="description">
          ChatGPT plugins, including the <a href="https://sites.google.com/view/chatgpt-code-interpreter">ChatGPT Code Interpreter</a>, are only available to ChatGPT Plus users who pay $20 a month and can currently only be accessed via a waitlist. Other popular ChatGPT plugins include Zapier, FiscalNote, Wolfram, OpenTable, Speak, Expedia, KAYAK, and Instacart. 
        </p>

        <h2 className="subtitle">Potential Applications</h2>
        <p className="description">
          With the flexibility and versatility of <a href="https://docs.kanaries.net/articles/chatgpt-code-interpreter">ChatGPT Code Interpreter</a>, users can develop a wide range of applications. The plugin can generate Pac-Man GIFs with a maze algorithm, visualize information through spreadsheets, perform OCR and restore older documents, and generate block images, among many others. As more users get access to ChatGPT and the Code Interpreter plugin, more innovative applications will come to light.
        </p>
        <h2 className="subtitle">Learn More</h2>
        <div className="iframe-container">
            <iframe src="https://docs.kanaries.net/articles/chatgpt-code-interpreter" title="ChatGPT Code Interpreter"></iframe>
        </div>
      </main>

      <Footer />
    </div>
  )
}
