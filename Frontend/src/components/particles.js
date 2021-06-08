import Particles from "react-tsparticles";
import React, { Component } from 'react'
export default class Particlescomponent extends Component {
    render() {
        return (
            <div style={{
                position: "absolute",
                width: "100%",
                height: "100%"
            }}>
                <Particles
                    id="tsparticles"
                    init={this.particlesInit}
                    loaded={this.particlesLoaded}
                    options={{
                        background: {
                            "position": "50% 50%",
                            "repeat": "no-repeat",
                            "size": "50%",
                            "opacity": 1
                        },
                        fpsLimit: 60,
                        interactivity: {
                            detectsOn: "canvas",
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                        },
                        particles: {
                            color: {
                                value: "#0D1117",
                            },
                            links: {
                                color: "#0D1117",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 4,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 800,
                                },
                                value: 30,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: 5,
                            },
                        },
                    }
                    }
                />
            </div>
        )
    }
}
