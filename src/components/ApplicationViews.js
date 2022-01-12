import React from "react"
import { Route } from "react-router-dom"
import { EventList } from './event/EventList'
import { EventProvider } from "./event/EventProvider"
import { GameList } from './game/GameList'
import { GameForm } from './game/GameForm'
import { GameProvider } from "./game/GameProvider"
import { EventForm } from "./event/EventForm"
import { GamerProvider } from "./gamer/GamerProvider"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <GamerProvider>
            <GameProvider>
                <Route exact path="/">
                    <GameList />
                </Route>
                <Route exact path="/games/new">
                    <GameForm />
                </Route>
                <EventProvider>
                    <Route exact path="/events">
                        <EventList />
                    </Route>
                    <Route exact path="/events/new">
                        <EventForm />
                    </Route>
                </EventProvider>
            </GameProvider>
            </GamerProvider>
        </main>
    </>
}
