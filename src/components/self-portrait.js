import React from "react"
import "./self-portrait.scss"

const SelfPortrait = props => (
    <div class="container">
        <div class="profile">
            <div class="wrapper">
                <div class="hair"></div>
                <div class="bangs-left"></div>
                <div class="bangs-right"></div>
                <div class="face"></div>
                {/* <div class="glasses">
                    <div class="glasses-inside"></div>
                </div> */}
                <div class="eyes"></div>
                <div class="blush"></div>
                <div class="nose"></div>
                <div class="mouth">
                    <div class="tongue"></div>
                </div>
                <div class="neck"></div>
                <div class="shirt"></div>
            </div>
        </div>
    </div>
)

export default SelfPortrait