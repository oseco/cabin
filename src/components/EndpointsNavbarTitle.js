/*
  Copyright 2015 Skippbox, Ltd

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
import { PropTypes } from 'react';
import Colors from 'styles/Colors';

const {
  View,
  Text,
  StyleSheet,
} = ReactNative;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 10, height: 10,
    backgroundColor: '#39BF57',
    borderRadius: 5,
    marginRight: 6,
  },
  text: {
    color: Colors.WHITE,
    fontSize: 17,
    fontWeight: '600',
  },
});

export default class EndpointsNavbarTitle extends Component {

  static propTypes = {
    endpoint: PropTypes.instanceOf(Immutable.Map).isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dot}/>
        <Text style={styles.text}>{this.props.endpoint.get('name')}</Text>
      </View>
    );
  }

}
