<template>
    <div class="gallery-container">

        <div class="gallery-image-box">
            <img src="../assets/img/1.jpeg" class="active" alt="Our Memory">
            <img src="../assets/img/2.jpeg" alt="Beautiful Moment">
            <img src="../assets/img/3.jpeg" alt="Together">
            <img src="../assets/img/4.jpeg" alt="Special Memory">
            <img src="../assets/img/5.jpeg" alt="Forever">
        </div>

        <audio src=""></audio>

        <div class="bottom-data">
            <div class="row align-items-center row-gap-2">

                <!-- Memory 1 -->
                <div class="d-flex align-items-center justify-content-between bottom-tile active">
                    <div class="col-3">
                        <div class="text-center play-icon">
                            <span class="material-symbols-outlined">play_circle</span>
                        </div>
                    </div>

                    <div class="col-9">
                        <div>
                            <h6 class="mb-0">The Beginning ❤️</h6>
                            <small>
                                Some people enter your life quietly and somehow become your whole world.
                            </small>
                        </div>
                    </div>
                </div>

                <!-- Memory 2 -->
                <div class="d-flex align-items-center justify-content-between bottom-tile">
                    <div class="col-3">
                        <div class="text-center play-icon">
                            <span class="material-symbols-outlined">play_circle</span>
                        </div>
                    </div>

                    <div class="col-9">
                        <div>
                            <h6 class="mb-0">Your Smile 🥰</h6>
                            <small>
                                Your smile is still one of my favorite things in this entire world.
                            </small>
                        </div>
                    </div>
                </div>

                <!-- Memory 3 -->
                <div class="d-flex align-items-center justify-content-between bottom-tile">
                    <div class="col-3">
                        <div class="text-center play-icon">
                            <span class="material-symbols-outlined">play_circle</span>
                        </div>
                    </div>

                    <div class="col-9">
                        <div>
                            <h6 class="mb-0">Just You & Me 💕</h6>
                            <small>
                                I don't need perfect moments. I just want more moments with you.
                            </small>
                        </div>
                    </div>
                </div>

                <!-- Memory 4 -->
                <div class="d-flex align-items-center justify-content-between bottom-tile">
                    <div class="col-3">
                        <div class="text-center play-icon">
                            <span class="material-symbols-outlined">play_circle</span>
                        </div>
                    </div>

                    <div class="col-9">
                        <div>
                            <h6 class="mb-0">My Favorite Person 🌸</h6>
                            <small>
                                Out of everyone I could have met, I'm so glad life brought me to you, Manu.
                            </small>
                        </div>
                    </div>
                </div>

                <!-- Memory 5 -->
                <div class="d-flex align-items-center justify-content-between bottom-tile">
                    <div class="col-3">
                        <div class="text-center play-icon">
                            <span class="material-symbols-outlined">play_circle</span>
                        </div>
                    </div>

                    <div class="col-9">
                        <div>
                            <h6 class="mb-0">Always You 💟</h6>
                            <small>
                                If I could choose one person to keep beside me through everything, it would be you.
                            </small>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>

import audio1 from '../assets/audio/1.mp3'
import audio2 from '../assets/audio/2.mp3'
import audio3 from '../assets/audio/3.mp3'
import audio4 from '../assets/audio/4.mp3'
import audio5 from '../assets/audio/5.mp3'

export default {

    name: 'GalleryComp',

    mounted() {

        let bottomTile = document.querySelectorAll('.bottom-tile')
        let getImage = document.querySelectorAll('.gallery-image-box img')
        let getAudio = document.querySelector('audio')

        let audioArray = [
            audio1,
            audio2,
            audio3,
            audio4,
            audio5
        ]

        bottomTile.forEach((target, index) => {

            target.addEventListener('click', () => {

                bottomTile.forEach((removeClass) => {
                    removeClass.classList.remove('active')
                })

                getImage.forEach((removeClass) => {
                    removeClass.classList.remove('active')
                })

                target.classList.add('active')
                getImage[index].classList.add('active')

                getAudio.pause()
                getAudio.currentTime = 0

                getAudio.src = audioArray[index]

                getAudio.play()
            })
        })
    }
}
</script>