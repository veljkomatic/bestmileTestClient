import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';

import { subscirbeToMissions } from '../Redux/actionCreators';

class Map extends PureComponent  {

    constructor(props) {
        super(props);
        this.props.subscirbeToMissions();
        this.renderDirections = this.renderDirections.bind(this);
        this.state = {
            directions: null
        }
    }

    // componentDidMount() {
    //     const DirectionsService = new google.maps.DirectionsService();
    //     var bounds = new google.maps.LatLngBounds( {
    //         "lat": 41.85073,
    //         "lng": -87.6514055
    //     }, {
    //         "lat": 41.8525704,
    //         "lng": -87.65126219999999
    //     });


    //     DirectionsService.route({
    //       origin: new google.maps.LatLng(41.8507300, -87.6512600),
    //       destination: new google.maps.LatLng(41.8525800, -87.6514100),
    //       travelMode: google.maps.TravelMode.DRIVING,
    //     }, (result, status) => {
    //       if (status === google.maps.DirectionsStatus.OK) {
    //         console.log('result ', result);
    //         this.setState({
    //           directions: result,
    //         });
    //       } else {
    //         console.error(`error fetching directions ${result}`);
    //       }
    //     });
    // }

    renderDirections() {
        const google = window.google;
        return (
            <div>
                {this.props.missions.map((mission) => {
                    const newRoutes = mission.routes.routes.map((el) => {
                        const newBounds = new google.maps.LatLngBounds(el.bounds.southwest, el.bounds.northeast);
                        return {
                            ...el,
                            bounds: newBounds
                        }
                    });
                    mission.routes.routes = newRoutes;
                    return (
                        <DirectionsRenderer preserveViewport={true} directions={mission.routes} />
                    )
                }
            )}
            </div>
        )
    }
     render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
            defaultCenter = { { lat: 40.730610, lng: -73.935242 } }
            defaultZoom = { 12 }
            >
            <div>
            <DirectionsRenderer preserveViewport={true} directions={this.state.directions} />
            </div>
            </GoogleMap>
        ));
        return(
            <div>
            <GoogleMapExample
                containerElement={ <div style={{ height: `1000px`, width: '1000px' }} /> }
                mapElement={ <div style={{ height: `100%` }} /> }
            />
            </div>
        );
    }
};

const mapStateToProps = ({ missions }) => ({
    activeMissions: missions.missionsData
});

export default connect(mapStateToProps, { subscirbeToMissions })(Map);
