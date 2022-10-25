#ifndef STD_INCLUDE
#include "stdef.hpp"
#endif
#include"Data.hpp"
template<typename T,typename U>
class Iterator{
    public:
        typedef typename vector<T>::iterator iter_type;//使用するイテレータの型
        //コンストラクタ
        Iterator(U *p_data,bool reverse=false):m_p_data_(p_data){
            m_it_=m_p_data_->books.begin();
        }
        void First(){
            m_it_=m_p_data_->books.begin();
        }
        void Next(){
            m_it_++;
        }
        bool IsEnd(){
            return (m_it_==m_p_data_->books.end());
        }
        iter_type Current(){
            return m_it_;
        }
    
    private:
        U *m_p_data_;
        iter_type m_it_;
};