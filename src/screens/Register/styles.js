import { StyleSheet, Dimensions } from 'react-native';

export const addImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAAAXNSR0IArs4c6QAABN9JREFUeAHtnUFO21AQhgkqO07QLavuOQj0Lq04QhXu0nIQ9mzolguUHVLDTOpEqZJW/q0wzIy/Jz3FWBPe+JtPtkGyZ3HSfKxWqzM7xKthXtrnR5vnNo8xnu2XPNm8t3nnc7FYvNgnoyIBk+Xa5qPNqOFrXVdkNeucrWinNpdRlhxYx9c+nXURKh38O8uy8WdZidlsc7Vq+WUoy2h3eVp0Msss8RvcB5sXSY7rp+XxqdONcLfrrP81lEUWd9Zz8ZzajI7CZCsOwmSryE4+/n+WbCNjTpMZdTvD+D/lso2MOU1m1O2mdzWZxBt+0W5623DudoZ5w7Lzq50AwuCBRABhJFwEIwwOSAQQRsJFMMLggEQAYSRcBCMMDkgEEEbCRTDC4IBEAGEkXAQjDA5IBBBGwkUwwuCARABhJFwEIwwOSAQQRsJFMMLggEQAYSRcBCMMDkgEEEbCRTDC4IBEAGEkXAQjDA5IBBBGwkUwwuCARABhJFwEIwwOSAQQRsJFMMLggEQAYSRcBCMMDkgEEEbCRTDC4IBEAGEkXAQjDA5IBBBGwkUwwuCARABhJFwEIwwOSAQOvnB46Ari78j3eey2d1KCBIcRGNWOcE8Yk8V7/NzazNQVJIwaC20JeOueL/YS8x/bPbaxFcZE8cvTNw/aDWB79gT85HFj4vx2Eh92cCDLDgw2twQ2J5Cvvmd9hhkuQ9+3IWxAYJ/AZ788LYYb3Ext7/ZTZU8GAut2hH7f4n8JcYOboSS5c1i3I9wIkztVsstC4MqFadViLgvZpnlc+j3MLzu486YHyGEdl8CzC5Oy7d1xj5PfdiwCfkliQGA0AYQZjYpAJ4AweCARQBgJF8EIgwMSAYSRcBGMMDggEUAYCRfBCIMDEgGEkXARjDA4IBFAGAkXwQiDAxIBhJFwEYwwOCARQBgJF8EIgwMSARfGn6llQGAMgWcX5mlMJDEQcFdcmHtQQGAkgXsX5m5kMGEQuONRWSQYS+DPo7L2gPWLfWPzhP7YLxM3PwL+rpgXvySd+FP59uHvAWFA4BCB28GRv54auLFIpDmEa9771i8U2iDYvoFqs8MehOSVZRsY8/78/yvLdtmYNGf2My9F3IXSf3vaSxErc8n6nLhd//fO5FU5r296qyZP3vEEECaeeekVEaZ0+eKTR5h45qVXRJjS5YtPHmHimZdeEWFKly8+eYSJZ156RYQpXb745BEmnnnpFRGmdPnik0eYeOalV0SY0uWLTx5h4pmXXhFhSpcvPnmEiWdeekWEKV2++OQRJp556RURpnT54pNHmHjmpVdEmNLli08eYeKZl14RYUqXLz55hIlnXnpFhCldvvjkESaeeekVEaZ0+eKTR5h45qVXRJjS5YtPHmHimZdeEWFKly8+eYSJZ156RYQpXb745BEmnnnpFRGmdPnik0eYeOalV0SY0uWLTx5h4pmXXhFhSpcvPnmEiWdeesVuwmRsR5gxp8nSdhMmYzvCjDkhzEAgYzvCjDkhzEAgYzvCjDlNFqZN0wQnMHRhebDNi8lEjvvFdds7603hXe9ajFb3MENhMrUjXLe9a2FK54OwM83SW+G881h2Ztzq2EyUU5vvKY2v3ers3UqQfx2MFe3a5qPNqOFreQvEtqPVTe+hKlkB37Id4ai2d4fyqrrvFWGLEOkD4lQ6AAAAAElFTkSuQmCC';

const WINDOW_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  scrollView: {
    flex: 1
  },
  modalWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  modalBody: {
    backgroundColor: '#fff',
    margin: 30,
    padding: 40,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10
  },
  button: {
    flex: 1,
    padding: 10,
    backgroundColor: '#999',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center'
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  buttonPhotoHolder: {
    paddingLeft: 5,
    paddingRight: 5,
    width: (WINDOW_WIDTH - 50) * 0.25,
    height: (WINDOW_WIDTH + 30) * 0.25,
    marginBottom: 20
  },
  buttonPhotoContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26abe2',
    borderRadius: 4,
    overflow: 'hidden',
    shadowColor: '#e7e7e7',
    shadowOffset: {
      width: 2,
      height: 0
    },
    shadowOpacity: 0.9,
    shadowRadius: 2
  },
  addImage: {
    width: 20,
    height: 20
  },
  photo: {
    width: (WINDOW_WIDTH - 80) * 0.25,
    height: (WINDOW_WIDTH - 0) * 0.25,
  }
});

export const modalStyles = {
  backdropOpacity: 0.1
};