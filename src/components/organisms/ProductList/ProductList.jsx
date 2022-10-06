import { ImageList, ImageListItem, ImageListItemBar, useMediaQuery } from '@mui/material';
import React from 'react'

const ProductList = (props) => {
    //USEMEDIAQUERY to check true or false of the current width screen
    const smMatches = useMediaQuery('(min-width:600px)')
    const mdMatches = useMediaQuery('(min-width:900px)')
    const lgMatches = useMediaQuery("(min-width:1200px)")


    //TODO: NEED TO WORK ON CASE WHERE TITLES CAN BE TOO LONG
    return (
        <div id='product-list'>
            <ImageList
                gap={smMatches ? 15 : 5}
                cols={lgMatches ? 3 : (mdMatches ? 2 : (smMatches ? 3 : 2))}
                sx={{
                    marginTop: "0px",
                }}
            >
                {itemData.map((item, index) => (
                    //GOT TO CHANGE THIS WITH LINK (REACT ROUTER)
                    <ImageListItem
                        key={index}
                        
                    >
                        <a href="#">
                            <img
                                style={{
                                    maxWidth: "100%",
                                }}
                                src={`${item.img}`}
                                alt={item.title}
                            // loading="lazy"
                            />
                        </a>
                        <ImageListItemBar
                            sx={{
                                marginBottom: "5px",
                            }}
                            title={
                                <span
                                    style={{
                                        color: "#2a254b",
                                        fontFamily: ["Clash Display", 'sans-serif'],
                                        display: "block",
                                        fontSize: "18px",
                                        marginTop: "5px",
                                        marginBottom: "5px"
                                    }}
                                >{item.title}
                                </span>
                            }
                            subtitle={
                                <span
                                    style={{
                                        color: "#2a254b",
                                        fontFamily: ["Clash Display", 'sans-serif'],
                                        fontSize: "13px",
                                    }}
                                >by: {item.author}
                                </span>
                            }
                            position="below"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}

export default ProductList


//THIS DATA IS FOR TESTING!!!!
const itemData = [
    {
        img: 'https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756',
        title: 'Breakfast',
        author: '@bkristastucchio',
    },
    {
        img: 'https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756',
        title: 'Burger',
        author: '@rollelflex',
    },
    {
        img: 'https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756',
        title: 'Coffee',
        author: '@nolanissac',
    },
    {
        img: 'https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756',
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: 'https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756',
        title: 'Honey',
        author: '@arwinneil',
    },
    {
        img: 'https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756',
        title: 'Mushrooms',
        author: '@silverdalex',
    },
    {
        img: 'https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://cdn2.yame.vn/pimg/ao-khoac-hoodie-on-gian-y-nguyen-ban-ver63-0021342/64a7a53a-c8bf-0d00-e086-001962ace5a9.jpg?w=540&h=756',
        title: 'Bike',
        author: '@southside',
    },
];