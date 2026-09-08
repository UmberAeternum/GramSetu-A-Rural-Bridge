def test_main_prints(capsys):
    from src import main as app

    app.main()
    captured = capsys.readouterr()
    assert 'Hello from GramSetu' in captured.out
