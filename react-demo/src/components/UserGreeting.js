export const UserGreeting = () => {
    const isLoggedIn = true
    return <div>
        Welcom {isLoggedIn && 'Kalle'}
    </div>
}