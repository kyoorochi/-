from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import time
import html

from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service

#옵션 설정
options = Options()
user = "Mozilla/5.0 (IPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15(KHTML, like Gecko) CriOS/80.0.3987.95 Mobile/15E148 Safari/604.1"
# options.add_argument(f"User-Agent={user}")
# options.add_argument("User-Agent=" + user)
options.add_argument("User-Agent = Mozilla/5.0 (IPhone; CPU iPhone OS 13_3 like Mac OS X) AppleWebKit/605.1.15(KHTML, like Gecko) CriOS/80.0.3987.95 Mobile/15E148 Safari/604.1")
# options.add_argument("user-agent=" + user)


options.add_experimental_option("detach", True)
options.add_experimental_option("excludeSwitches", ["enable-automation"])

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=options)

#크롤링 코드 작성
url = "https://m2.melon.com/index.htm"
#soup = BeautifulSoup(html, "html.parser")
driver.get(url)
time.sleep(3)

if driver.current_url != url:
    driver.get(url)

# driver.find_element(By.LINK_TEXT, "닫기").click()
# time.sleep(0.2)

driver.find_element(By.LINK_TEXT, "멜론차트").click()
time.sleep(0.5)

more_btn = driver.find_elements(By.CSS_SELECTOR, "#moreBtn")[1].click()
time.sleep(2)

# 순위, 곡명, 가수명는 필수 / 추가할 수 있는 정보 있으면 가져오기

html = driver.page_source
soup = BeautifulSoup(html, "html.parser")

chartList = soup.select('.service_list.list_music > .list_item')

num = 1
for i in chartList:
    title = i.select_one(".title.ellipsis") #.strip을 제거할때는 이렇게쓰고
    singer = i.select_one(".name.ellipsis")

    print(f'순위 : {num}')
    print(f'제목 : {title.text.strip()}') #중괄호 안에 .strip() 넣어도 된다.
    print(f'가수 : {singer.text}')
    print()

    num += 1