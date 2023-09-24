import React, { useState, useEffect } from 'react'
import Card from './Card'
import './style/deck.css'
import 'react-icons'
import { Priority } from '../constants/data'

const Deck = ({ symbol, decktitle, uid, data, group, order }) => {

    const [cardnum, setcardnum] = useState(0);
    const sorttitle = (ticket1, ticket2) => {
        if (ticket1.title < ticket2.title) return -1;
        if (ticket1.title > ticket2.title) return 1;
        return 0;
    };

    const sortprirority = (ticket1, ticket2) => {
        if (ticket1.priority < ticket2.priority) return -1;
        if (ticket1.priority > ticket2.priority) return 1;
        return 0;
    }
    const sortedCards = order === "Priority" ? data?.tickets.sort(sortprirority) : data?.tickets.sort(sorttitle);

    useEffect(() => {
        if (sortedCards) {
            const deckCount = sortedCards.filter(item => decktitle === item.status || decktitle === Priority[item.priority].title || uid === item.userId).length;
            setcardnum(deckCount);
        }
    }, [decktitle, sortedCards, uid]);

    return (
        <div className='deck-container'>
            <div className='deck-title'>
                <div className='deck-title-name'>
                    <div className='deck-title-name-icon'> {symbol} </div>
                    <div className='deck-title-name-category'>{decktitle}</div>
                    <div className='deck-title-name-count'>{cardnum}</div>
                </div>
                <div className='deck-title-options'>
                    <div className='deck-title-options-add'>
                        <button onClick={() => console.log("Add")}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>
                    <div className='deck-title-options-button' onClick={() => {
                        console.log("Info");
                    }}>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='deck-content'>
                {group === "Status" && sortedCards?.map((item, id) => (
                    (decktitle === item.status && <Card key={id} camid={item.id} sub={item.title} cat={item.tag} group={group} usr={item.userId} userdata={data?.users} ticketdata={data?.tickets} />)
                ))}
                {group === "Priority" && sortedCards?.map((item, id) => (
                    (decktitle === Priority[item.priority].title && <Card key={id} camid={item.id} sub={item.title} group={group} cat={item.tag} usr={item.userId} userdata={data?.users} ticketdata={data?.tickets} />)
                ))}
                {group === "User" && sortedCards?.map((item, id) => (
                    (uid === item.userId && <Card key={id} camid={item.id} sub={item.title} cat={item.tag} group={group} ticketdata={sortedCards} />)
                ))}
            </div>
        </div>
    )
}

export default Deck