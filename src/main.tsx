import React, {Component, type ErrorInfo, type ReactNode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import './oracles/tarot.css';

class AppErrorBoundary extends Component<{children:ReactNode},{error:Error|null}> {
  state={error:null as Error|null};
  static getDerivedStateFromError(error:Error){return {error};}
  componentDidCatch(error:Error,info:ErrorInfo){console.error('Sanctuaire render error:',error,info.componentStack);}
  render(){
    if(this.state.error){
      return <main style={{minHeight:'100vh',padding:'28px 20px',background:'#100b1b',color:'#f4ecdf',fontFamily:'sans-serif'}}>
        <h1 style={{color:'#e4c98e'}}>Le Sanctuaire a rencontré une erreur</h1>
        <p>Le détail ci-dessous nous permettra de corriger le problème.</p>
        <pre style={{whiteSpace:'pre-wrap',overflowWrap:'anywhere',padding:16,background:'#080712',border:'1px solid #9b815a',borderRadius:8,color:'#ffd8b0'}}>{this.state.error.message}{'\n'}{this.state.error.stack||''}</pre>
        <button onClick={()=>location.reload()} style={{padding:'12px 18px',border:0,borderRadius:24,background:'#d5b77c',color:'#211827'}}>Recharger la page</button>
      </main>;
    }
    return this.props.children;
  }
}
window.addEventListener('error',e=>console.error('Window error:',e.message,e.filename,e.lineno));
window.addEventListener('unhandledrejection',e=>console.error('Unhandled promise:',e.reason));
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><AppErrorBoundary><App/></AppErrorBoundary></React.StrictMode>);
