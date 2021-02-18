const Information = {
    title:  'Smart Watch',
    description: 'A good quality smart watch found in different colors.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    feature: [
        "Time", "Heart Rate"
    ]
}

Object.freeze(Information); //This line of code just makes your object as a constant. No values can be updated.

export default Information;
