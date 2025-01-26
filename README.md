
# Content Creation Platform

A React-based platform for content creation with a rich text editor, post preview functionality, and AI-powered tools. This project enables users to create, edit, and publish posts, while also providing previews, text formatting, file uploads, and AI-driven content enhancements.

## Features

### `PostEditor`
The `PostEditor` component provides a rich text editor for creating posts with various functionalities:

- **Text Formatting:** Bold, Italic, and Emoji insertion.
- **File Upload:** Ability to upload and insert images.
- **Character Count:** Displays the total number of characters typed.
- **Auto-Save:** Saves the content every minute and displays the last saved time.
- **AI Tools:** Provides AI-driven tools like Rephrase, Summarize, Emojify, Translate, and more through a context menu.
- **Post Actions:** Includes buttons to save drafts, schedule posts, and publish posts.
  
### `PostPreview`
The `PostPreview` component shows a preview of a post with user details, post content, and interaction options:

- **User Info:** Displays user name, profession, and current status.
- **Content Preview:** Displays the post's content with a "see more" option.
- **Reactions Section:** Displays the number of likes, comments, shares, and reactions (laughs, surprises, etc.).
- **Action Buttons:** Allows users to like, comment, and share posts.

## Installation

To get started with this project, clone this repository and install the dependencies:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/content-creation-platform.git
   cd content-creation-platform
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

Your app will be running at `http://localhost:3000`.

## Project Structure

```plaintext
src/
├── components/
│   ├── PostEditor.jsx        # Editor for creating posts
│   ├── PostPreview.jsx       # Preview of the post
│   └── ...                   # Other components
├── App.js                    # Main app file
├── index.js                  # Entry point for React
└── styles.css                # Global styles
```

## Usage

1. **PostEditor**: The `PostEditor` component allows users to create and edit posts. Users can format text, upload images, and use AI-powered tools to improve the content.

   ```jsx
   import PostEditor from './components/PostEditor';

   const App = () => (
     <div>
       <PostEditor />
     </div>
   );
   ```

2. **PostPreview**: The `PostPreview` component displays a preview of a user's post with all relevant interactions like liking, commenting, and sharing.

   ```jsx
   import PostPreview from './components/PostPreview';

   const App = () => (
     <div>
       <PostPreview />
     </div>
   );
   ```

## Dependencies

- **React**: Frontend framework.
- **React Icons**: For adding icons to buttons and menus.
- **Bootstrap**: For responsive design and layout components.

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Create a pull request.

