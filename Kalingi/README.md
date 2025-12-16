# Kilangi Jewellery - eCommerce Homepage

A beautiful, responsive eCommerce homepage for Kilangi Jewellery built with vanilla HTML, CSS, and JavaScript.

## Features

### Design & Layout
- Fully responsive design that works seamlessly on desktop, tablet, and mobile devices
- Elegant typography using Cormorant Garamond for headings and Montserrat for body text
- Premium color palette with dark green, gold accents, and beige/cream backgrounds
- Clean, modern layout with thoughtful spacing and visual hierarchy

### Interactive Elements
- **Mobile Navigation**: Responsive hamburger menu with smooth transitions
- **Product Cards**: Hover effects with image zoom and wishlist functionality
- **Category Tabs**: Smooth tab switching with animated product grid transitions
- **Recently Viewed Slider**: Auto-scrolling carousel with manual navigation controls
- **Wishlist Feature**: Add items to wishlist with visual feedback and floating heart animation
- **Shopping Cart**: Dynamic cart counter with bounce animation
- **Smooth Scrolling**: Seamless navigation between page sections
- **Scroll Animations**: Elements fade in and slide up as they enter the viewport
- **Smart Header**: Header hides on scroll down and shows on scroll up
- **Parallax Effects**: Subtle parallax scrolling on hero and image sections
- **Button Ripple Effects**: Interactive button feedback on hover and click
- **Page Loader**: Elegant loading animation on initial page load
- **Toast Notifications**: Clean notification system for user actions

### Sections
1. **Top Bar**: Promotional message with social media links
2. **Header**: Logo, navigation menu, search bar, and action icons (search, cart, account)
3. **Hero Section**: Eye-catching hero with tagline and feature badges
4. **Bestseller Section**: Product grid with category tabs
5. **Recently Viewed**: Horizontal scrolling carousel of products
6. **Gift Notes Section**: Personalized gift options by price range
7. **Winter Collection**: Split section showcasing seasonal arrivals
8. **Collection Explorer**: Visual grid of product categories
9. **Gifts Section**: Special occasion gift suggestions (Birthday, Anniversary, Engagement)
10. **Ethos Section**: Brand story and values
11. **Lab Grown Section**: Trust badges highlighting product quality and services
12. **Testimonials**: Customer reviews in a grid layout
13. **Newsletter**: Contact information with icons
14. **Footer**: Comprehensive links and brand information

## Technology Stack

- **HTML5**: Semantic markup for better accessibility and SEO
- **CSS3**: Modern CSS with custom properties, flexbox, and grid
- **JavaScript (ES6+)**: Vanilla JavaScript with modern features
- **Vite**: Build tool for optimized production builds
- **Google Fonts**: Cormorant Garamond and Montserrat
- **Pexels**: High-quality stock images

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd kilangi-jewellery
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Project Structure

```
kilangi-jewellery/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── package.json        # Project dependencies
├── vite.config.ts      # Vite configuration
└── README.md           # Project documentation
```

## Design Decisions

### Typography
- **Headings**: Cormorant Garamond - an elegant serif font that conveys luxury and timelessness
- **Body**: Montserrat - a clean, modern sans-serif for excellent readability

### Color Palette
- **Primary Green** (#1a3a34): Used for headers, navigation, and primary elements
- **Gold** (#d4af37): Accent color for highlights, hover states, and CTAs
- **Light Beige/Cream** (#f5ebe0, #ede0d4): Soft backgrounds that complement jewelry photography
- **White**: Clean backgrounds for product cards and sections
- **Gray**: Secondary text and subtle elements

### Responsive Breakpoints
- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: 320px - 767px

## Interactive Features Explained

### Mobile Menu
- Hamburger icon transforms into X on click
- Menu slides down with smooth animation
- Auto-closes when a link is clicked

### Product Interactions
- Hover reveals wishlist button with fade-in effect
- Clicking wishlist creates floating heart animation
- Product images zoom slightly on card hover
- Ripple effect on product card click

### Category Tabs
- Active tab highlighted with primary color
- Products fade out and fade in when switching categories
- Staggered animation for each product card

### Recently Viewed Slider
- Auto-scrolls every 4 seconds
- Manual navigation with arrow buttons
- Arrows fade when reaching start/end
- Pauses on hover for better UX

### Smart Header
- Becomes sticky on scroll
- Hides when scrolling down (after 200px)
- Reveals when scrolling up
- Shadow increases on scroll for depth

### Cart System
- Counter updates with each "Shop" button click
- Bounce animation provides visual feedback
- Toast notification confirms action

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Lazy loading for images
- CSS animations using transform and opacity for better performance
- Throttled scroll event listeners
- Efficient DOM queries with caching
- Optimized images from Pexels CDN
- Vite bundling for production

## Future Enhancements

Potential features for future iterations:
- Product quick view modal
- Advanced filtering and sorting
- Search functionality with autocomplete
- Shopping cart page
- Checkout flow
- User authentication
- Product detail pages
- Reviews and ratings system
- Newsletter signup
- Live chat integration

## License

This project is created as a frontend assignment and is for demonstration purposes.

## Credits

- **Design**: Based on provided PDF mockups
- **Images**: Pexels (Free stock photos)
- **Icons**: SVG icons (inline)
- **Fonts**: Google Fonts (Cormorant Garamond, Montserrat)

---

Built with attention to detail and modern web development best practices.
