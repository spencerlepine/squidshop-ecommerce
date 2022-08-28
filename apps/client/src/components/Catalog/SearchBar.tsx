import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SearchBar from "material-ui-search-bar";

const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

type Props = {
  customStyles?: any;
}

// should send query as parameter to catalog page
const CustomSearchBar: React.FC<Props> = ({ customStyles }) => {
  const navigate = useNavigate();
  const queryData = useQuery();
  const [query, setQuery] = React.useState(queryData.get('query'));

  React.useEffect(() => {
    if (queryData) {
      setQuery(queryData.get('query'))
    }
  }, [queryData])

  const handleSubmit = () => {
    const search = query;
    setQuery('')
    navigate(`/catalog?query=${search}`)
  }

  const handleClear = () => {
    setQuery('')
    queryData.delete('query')
    navigate("/catalog", { replace: true });
  }

  return (
    <SearchBar
      style={customStyles || { width: '40%', margin: '0 auto', float: 'right' }}
      value={query || ''}
      onChange={(newValue) => setQuery(newValue)}
      onRequestSearch={handleSubmit}
      onCancelSearch={handleClear}
    />
  )
}

export default CustomSearchBar
