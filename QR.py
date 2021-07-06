import qrcode
import cv2


def generate(text, tag=None):
    """
    Generate QR code in image with defined content
    :param text: input text, can be a message/link, type: string
    :param tag: processed image will be named after the tag with JPG extension, eg. 'output' then the generated QR code
    will be saved under output.jpg image, type: string
    :return:
    """
    img = qrcode.make(text)
    if tag:
        img.save('{}.jpg'.format(tag))
    else:
        img.save('out.jpg')


def read(image):
    """
    Detect the QR code and read its content
    :param image: image contains QR code, type: string
    :return: content of the QR code, can be a message or a website to redirect
    """
    detector = cv2.QRCodeDetector()
    img = cv2.imread(image)
    message, _, _ = detector.detectAndDecode(img)  # message, vertices, QR image
    return message
