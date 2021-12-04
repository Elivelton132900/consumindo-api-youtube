import axios from 'axios'

const KEY = 'AIzaSyB2G4DE-np5ery0BpXdnxxiOKikb8-Lxy4'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})