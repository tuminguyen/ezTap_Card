# ezTapCard - One Tap is all you need 

This repo contains design site for freely creating your own card and save it as PDF. You can easily print it directly or stick it on a NFC card.

![demo-card](demo_card.png)

---
## USAGE

Simple step to make a readable NFC card

*Create link information* 

- Use [LINKTREE](https://linktr.ee/) to create a link which contains all your information.
- Save your personal Linktree's link for later use.

**Design the card appearance as your preference**

- Follow the instruction on screen to finish your edit.
- Paste the link in the previous step into the input field of QR Code tab 
- Save your final design as PDF.

**Print your design (with color)**

Remember to choose _Fit to width_ before printing it


**Write information to the card**

You can download NFCTools on your phone to write the card. 

**Time to test**

---
## ENVIRONMENT
- Ubuntu 20.04
- Python 3.7


## REQUIREMENTS

Check out the ```requirements.txt```

```
pip install -r requirements.txt
```

## OTHER MATERIALS

- [Python program for QR Code and Barcode Reader](https://github.com/tuminguyen/QR_Barcode_Reader)

- [Python QR reader and writer (only QR, simple)](https://github.com/tuminguyen/ezTap_Card/QR.py)

- [Python module for read/write NFC card](https://github.com/nfcpy/nfcpy)