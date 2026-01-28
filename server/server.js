import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Sample articles data
const articles = [
  {
    id: 1,
    title: "How to Setup SonarQube in VS Code",
    slug: "how-to-setup-sonarqube-in-vscode",
    excerpt: "Have you been in a situation where you commit your code and SonarQube adds comments? Learn how to set it up in VS Code.",
    date: "2024-01-15",
    featured: true,
    content: "Full article content here..."
  },
  {
    id: 2,
    title: "How to Write Good Git Commit Messages",
    slug: "how-to-write-good-git-commit-messages",
    excerpt: "Writing good commit messages is an under-valued skill. Why does it seem so hard?",
    date: "2024-01-10",
    featured: true,
    content: "Full article content here..."
  },
  {
    id: 3,
    title: "Sizing in CSS: px vs em vs rem",
    slug: "sizing-in-css-px-vs-em-vs-rem",
    excerpt: "We have been conversant with using pixels for sizing in CSS, but why use em and rem?",
    date: "2024-01-05",
    featured: true,
    content: "Full article content here..."
  },
  {
    id: 4,
    title: "How to Create Code Snippets in VS Code",
    slug: "how-to-create-code-snippets-in-vscode",
    excerpt: "Visual Studio Code (VS Code) is a widely used source code editor that supports code snippets for faster development.",
    date: "2024-02-01",
    featured: false,
    content: "Full article content here..."
  },
  {
    id: 5,
    title: "2023, A Year In My Life",
    slug: "2023-a-year-in-my-life",
    excerpt: "2022 taught me that the world is laden with so much goodness but we need to slow down to see it.",
    date: "2024-01-20",
    featured: false,
    content: "Full article content here..."
  },
  {
    id: 6,
    title: "Diagramming with Mermaid",
    slug: "diagramming-with-mermaid",
    excerpt: "Embarking on your coding journey often involves wrangling complex ideas and systems.",
    date: "2024-01-25",
    featured: false,
    content: "Full article content here..."
  }
]

// API Routes
app.get('/api/articles', (req, res) => {
  res.json(articles)
})

app.get('/api/articles/:slug', (req, res) => {
  const article = articles.find(a => a.slug === req.params.slug)
  if (!article) {
    return res.status(404).json({ error: 'Article not found' })
  }
  res.json(article)
})

// Serve static files from React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')))
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
