import React from "react"
import Markdown from "react-markdown"
import aboutText from "../pages.json"
import Layout from "../components/Layout"

const Bio = () => {
    return (
        <Layout>
             <h1 style={{textAlign: `center`, marginBottom: `40px`}}>This is the Bio Page.</h1>
            <div className="page-content">
                <Markdown source={aboutText[0].content} escapeHtml={false} />
            </div>
        </Layout>
    )
}

export default Bio;