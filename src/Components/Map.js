import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { subscirbeToMissions } from '../Redux/actionCreators';
class Map extends PureComponent  {

    componentDidMount() {
        const NewYork = new window.google.maps.LatLng(40.730610, -73.935242);
        const mapOptions = {
          zoom: 12,
          center: NewYork
        }
        this.map = new window.google.maps.Map(this.refs.map, mapOptions);
        this.props.subscirbeToMissions();
    }

    componentWillReceiveProps(newProps) {
        if(newProps.activeMissions.length !== this.props.activeMissions.length) {
            newProps.activeMissions.forEach(element => {
                const newActiveMissionsLength = newProps.activeMissions.length;
                const directionsRenderer = new window.google.maps.DirectionsRenderer();
                directionsRenderer.setMap(this.map);
                directionsRenderer.setOptions({ preserveViewport: true });
                directionsRenderer.setDirections(newProps.activeMissions[newActiveMissionsLength-1].computeRoutes);
            });
        }
    }

     render() {
        return(
            <div>
                <div style={mapStyle} ref="map"></div>
            </div>
        );
    }
};

const mapStyle = {
    height: '1000px',
    width: '100%'
}

const mapStateToProps = ({ missions }) => ({
    activeMissions: missions.missionsData
});

export default connect(mapStateToProps, { subscirbeToMissions })(Map);
