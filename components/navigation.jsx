
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
]

const Navigation = () => {
  return (
    <div className="flex-1">
      <ul className="flex flex-col min-lg:flex-row gap-x-2 gap-y-5 min-lg:items-center min-lg:h-full">
        {navItems.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul> 
    </div>
  )
}

export default Navigation
