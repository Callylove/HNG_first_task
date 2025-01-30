# Profile Card Component

A responsive profile card component built with HTML, CSS, and vanilla JavaScript. This component displays personal information including a profile picture, name, job title, bio, location, email, social links, and current UTC time.

## Features

- Responsive design
- Dynamic UTC time update
- Social media links
- Profile information display
- Clean and modern UI
- Icon integration using Lucide

## Files Structure

```
profile-card/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Required Elements

All required elements include data-testid attributes for testing purposes:
- Profile Picture (data-testid="profilePicture")
- Full Name (data-testid="fullName")
- Job Title (data-testid="jobTitle")
- Short Bio (data-testid="shortBio")
- Current Location (data-testid="currentLocation")
- Email Address (data-testid="emailAddress")
- Social Links (data-testid="socialLinks")
- Current Time in UTC (data-testid="currentTimeUTC")

## Setup Instructions

1. Clone or download the repository
2. Place all files in the same directory
3. Open index.html in a web browser

## Customization

### Profile Information
Edit the following in `index.html`:
- Profile picture URL
- Name
- Job title
- Bio
- Location
- Email address
- Social media links

### Styling
Modify `styles.css` to change:
- Colors
- Font sizes
- Spacing
- Card dimensions
- Animations

### Functionality
Adjust `script.js` to modify:
- Time update frequency
- Time format
- Additional dynamic features

## Dependencies

- Lucide Icons (loaded via CDN)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The profile picture uses a placeholder image. Replace it with an actual image URL
- Social media links are currently pointing to homepage URLs. Update them with actual profile URLs
- The component is fully responsive and adapts to different screen sizes