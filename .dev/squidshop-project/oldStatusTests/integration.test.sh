RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'
trap 'cleanup ; printf "${RED}Tests Failed For Unexpected Reasons${NC}\n"' HUP INT QUIT PIPE TERM
node integration.test.js
if [ $? -ne 0 ] ; then
  printf "${RED}Integration Tests Failed${NC}\n"
  exit -1
else
  printf "${GREEN}Tests Passed${NC}\n"
fi
exit $TEST_EXIT_CODE