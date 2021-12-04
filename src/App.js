import React from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import './app.css'
import youtubeApi from "./api/youtubeApi";
import VideoList from './Components/VideoList/VideoList'
import VideoDetail from "./Components/VideoDetails/VideoDetails";

class App extends React.Component {

  state = { videos: [], videoSelecionado: null }

  onSearch = async (termo) => {
    const response = await youtubeApi.get('/search', {
      params: {
        q: termo
      }
    })
    this.setState({
      videos: response.data.items,
      videoSelecionado: response.data.items[0]
    })
  }

  aoSelecionar = (video) => {
    this.setState({ videoSelecionado: video })
  }

  render() {
    return (
      <div>
        <div className="searchBarContainer">
          <SearchBar onSearch={this.onSearch} />
        </div>
        <div className="flex">
          <VideoDetail videoSelecionado={this.state.videoSelecionado} />
          <VideoList
            aoSelecionar={this.aoSelecionar}
            videos={this.state.videos} />
        </div>
      </div>

    );
  }
}

export default App;

