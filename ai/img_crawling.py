from selenium import webdriver
from urllib.request import urlopen
from selenium.webdriver.common.keys import Keys
import time
import urllib.request
import os

#폴더 생성
if not os.path.isdir("test_img"):
    os.makedirs("test_img")

driver = webdriver.Chrome()
driver.get("https://www.google.co.kr/imghp?hl=ko&ogbl")

search = "향나무" # 검색어 여기에 식물 이름 들어감니다
elem = driver.find_element_by_name("q") #검색창 찾기
elem.send_keys(search) #검색어 입력
elem.send_keys(Keys.RETURN) #엔터

#스크롤 내리기
SCROLL_PAUSE_TIME = 1

last_height = driver.execute_script("return document.body.scrollHeight")

while True:
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(SCROLL_PAUSE_TIME)
    new_height = driver.execute_script("return document.body.scrollHeight")

    if new_height == last_height:
        try:
            driver.find_element_by_css_selector(".mye4qd").click() #결과 더보기 버튼인듯?
        except:
            break
    last_height = new_height

# 썸넬 클릭하고 원본 저장
images = driver.find_elements_by_css_selector(".rg_i.Q4LuWd") # 썸넬 이미지 css 셀렉터
count = 1

for image in images:
    try:
        image.click()
        time.sleep(2)
        imgUrl = driver.find_element_by_xpath('//*[@id="Sva75c"]/div/div/div[3]/div[2]/c-wiz/div/div[1]/div[1]/div[3]/div/a/img').get_attribute('src') #썸낼 클릭한 커진 이미지의 xpath 넣어주기
        urllib.request.urlretrieve(imgUrl, "test_img/" + search + "_" + str(count) + ".jpg")
        print("Image saved: {}_{}.jpg".format(search, count))
        count += 1
    except:
        pass

driver.close()